import toolBoxIcon from '@/lib/assets/icons/image-plugin-toolbox-icon.svg?raw'
import hideCaptionIcon from '@/lib/assets/icons/image-plugin-hide-caption.svg?raw'
import stretchImageIcon from '@/lib/assets/icons/image-plugin-stretch-image.svg?raw'
import borderIcon from '@/lib/assets/icons/image-plugin-border.svg?raw'
import backgroundIcon from '@/lib/assets/icons/image-plugin-background.svg?raw'
import './index.scss'

/**
 * SimpleImage Tool for the Editor.js
 * Works only with pasted image URLs and requires no server-side uploader.
 *
 * @typedef {object} SimpleImageData
 * @description Tool's input and output data format
 * @property {string} url — image URL
 * @property {string} caption — image caption
 * @property {boolean} withBorder - should image be rendered with border
 * @property {boolean} withBackground - should image be rendered with background
 * @property {boolean} stretched - should image be stretched to full width of container
 */
export default class SimpleImage {
  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {{data: SimpleImageData, config: object, api: object}}
   *   data — previously saved data
   *   config - user config for Tool
   *   api - Editor.js API
   */
  constructor({ data, config, api }) {
    /**
     * Editor.js API
     */
    this.api = api;

    /**
     * When block is only constructing,
     * current block points to previous block.
     * So real block index will be +1 after rendering
     * @todo place it at the `rendered` event hook to get real block index without +1;
     * @type {number}
     */
    this.blockIndex = this.api.blocks.getCurrentBlockIndex() + 1;

    /**
     * Styles
     */
    this.CSS = {
      baseClass: this.api.styles.block,
      loading: this.api.styles.loader,
      input: this.api.styles.input,
      settingsButton: this.api.styles.settingsButton,
      settingsButtonActive: this.api.styles.settingsButtonActive,

      /**
       * Tool's classes
       */
      wrapper: 'cdx-simple-image',
      imageHolder: 'cdx-simple-image__picture',
      caption: 'cdx-simple-image__caption'
    };

    /**
     * Nodes cache
     */
    this.nodes = {
      wrapper: null,
      imageHolder: null,
      image: null,
      caption: null
    };

    /**
     * Tool's initial data
     */
    this.data = {
      url: data.url || '',
      caption: data.caption || '',
      hiddenCaption: data.withBorder !== undefined ? data.hiddenCaption : false,
      withBorder: data.withBorder !== undefined ? data.withBorder : false,
      withBackground: data.withBackground !== undefined ? data.withBackground : false,
      stretched: data.stretched !== undefined ? data.stretched : false,
    };
 
    /**
     * Available Image settings
     */
    this.settings = [
      {
        name: 'withBorder',
        icon: borderIcon
      },
      {
        name: 'stretched',
        icon: stretchImageIcon
      },
      {
        name: 'withBackground',
        icon: backgroundIcon
      },
      {
        name: 'hiddenCaption',
        icon: hideCaptionIcon
      },
    ];
  }

  static get toolbox() {
    return {
      title: 'Image',
      icon: toolBoxIcon
    };
  }

  /**
   * Creates a Block:
   *  0) Show a button if there is no image
   *  1) Show preloader
   *  2) Start to load an image
   *  3) After loading, append image and caption input
   * @public
   */
  render() {
    let wrapper = this._make('div', [this.CSS.baseClass, this.CSS.wrapper]),
      loadButton = this._make('input', [], {
        type: 'file'
      }),
      loader = this._make('div', this.CSS.loading),
      imageHolder = this._make('div', this.CSS.imageHolder),
      image = this._make('img'),
      caption = this._make('div', [this.CSS.input, this.CSS.caption], {
        contentEditable: 'true',
        innerHTML: this.data.caption || ''
      });

    this.nodes.imageHolder = imageHolder;
    this.nodes.wrapper = wrapper;
    this.nodes.image = image;
    this.nodes.caption = caption;
    this.nodes.loader = loader;
    this.nodes.loadButton = loadButton;

    caption.dataset.placeholder = 'Enter a caption';

    image.onload = () => {
      wrapper.classList.remove(this.CSS.loading);
      imageHolder.appendChild(image);
      wrapper.appendChild(imageHolder);
      wrapper.appendChild(caption);
      loader.remove();

      if (loadButton !== null) {
        loadButton.remove();
        loadButton = null;
      }

      this.nodes.loader = null;
      this._acceptTuneView();
    };

    image.onerror = (e) => {
      // @todo use api.Notifies.show() to show error notification
      console.log('Failed to load an image', e);
    };

    if (this.data.url) {
      wrapper.appendChild(loader);
      image.src = this.data.url;    }
    else {
      wrapper.appendChild(loadButton);

      loadButton.onchange = (e) => {
        const file = e.target.files[0];
        const url = URL.createObjectURL(file);
        
        this.data = {
          url: url,
          caption: file.name
        };
      
        loadButton.remove();
        loadButton = null;
      };
    }

    return wrapper;
  }

  /**
   * @public
   * Saving method
   * @param {Element} blockContent - Tool's wrapper
   * @return {SimpleImageData}
   */
  save(blockContent) {
    let image = blockContent.querySelector('img'),
      caption = blockContent.querySelector('.' + this.CSS.input);

    if (!image) {
      return this.data;
    }

    return Object.assign(this.data, {
      url: image.src,
      caption: caption.innerHTML
    });
  }

  /**
   * Sanitizer rules
   */
  static get sanitize() {
    return {
      url: {},
      withBorder: {},
      withBackground: {},
      stretched: {},
      caption: {
        br: true,
      },
    };
  }

  /**
   * On paste callback that is fired from Editor.
   *
   * @param {PasteEvent} event - event with pasted config
   */
  onPaste(event) {
    switch (event.type) {
      case 'tag':
        const img = event.detail.data;

        this.data = {
          url: img.src,
        };

        break;

      case 'pattern':
        const { data: text } = event.detail;

        this.data = {
          url: text,
        };
        break;

      case 'file':
        const { file } = event.detail;
        this.data = {
          url: URL.createObjectURL(file),
          caption: file.name
        };
        break;
    }

    this.nodes.loadButton.remove();
    this.nodes.loadButton = null;
  }

  /**
   * Returns image data
   * @return {SimpleImageData}
   */
  get data() {
    return this._data;
  }

  /**
   * Set image data and update the view
   *
   * @param {SimpleImageData} data
   */
  set data(data) {
    this._data = Object.assign({}, this.data, data);

    if (this.nodes.image) {
      this.nodes.image.src = this.data.url;
    }

    if (this.nodes.caption) {
      this.nodes.caption.innerHTML = this.data.caption;
    }
  }

  /**
   * Specify paste substitutes
   * @see {@link ../../../docs/tools.md#paste-handling}
   * @public
   */
  static get pasteConfig() {
    return {
      patterns: {
        image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png)$/i
      },
      tags: ['img'],
      files: {
        mimeTypes: ['image/*']
      },
    };
  }

  /**
   * Makes buttons with tunes: add background, add border, stretch image
   * @return {HTMLDivElement}
   */
  renderSettings() {
    let wrapper = document.createElement('div');

    this.settings.forEach(tune => {
      let el = document.createElement('div');

      el.classList.add(this.CSS.settingsButton);
      el.innerHTML = tune.icon;

      el.addEventListener('click', () => {
        this._toggleTune(tune.name);
        el.classList.toggle(this.CSS.settingsButtonActive);
      });

      el.classList.toggle(this.CSS.settingsButtonActive, this.data[tune.name]);

      wrapper.appendChild(el);
    });
    return wrapper;
  };

  removed() {
    if (this.data.url && this.data.url.startsWith('blob:')) {
      URL.revokeObjectURL(this.data.url);
    }
  }
  
  /**
   * Helper for making Elements with attributes
   *
   * @param  {string} tagName           - new Element tag name
   * @param  {array|string} classNames  - list or name of CSS classname(s)
   * @param  {Object} attributes        - any attributes
   * @return {Element}
   */
  _make(tagName, classNames = null, attributes = {}) {
    let el = document.createElement(tagName);

    if (Array.isArray(classNames)) {
      el.classList.add(...classNames);
    } else if (classNames) {
      el.classList.add(classNames);
    }

    for (let attrName in attributes) {
      el[attrName] = attributes[attrName];
    }

    return el;
  }

  /**
   * Click on the Settings Button
   * @private
   */
  _toggleTune(tune) {
    this.data[tune] = !this.data[tune];
    this._acceptTuneView();
  }

  /**
   * Add specified class corresponds with activated tunes
   * @private
   */
  _acceptTuneView() {
    this.settings.forEach(tune => {
      this.nodes.imageHolder.classList.toggle(this.CSS.imageHolder + '--' + tune.name.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`), !!this.data[tune.name]);

      if (tune.name === 'stretched') {
        this.api.blocks.stretchBlock(this.blockIndex, !!this.data.stretched);
      }
    });
  }
}
