import './index.scss'

export const indent = (api) => {
    const blockCount = api.blocks.getBlocksCount();
    let indentLevel = 0
    for (let i = 0; i < blockCount; i++) {
        const block = api.blocks.getBlockByIndex(i);

        block.holder.classList.forEach(className => {
            if (className.includes('indent')) block.holder.classList.remove(className)
        })


        if (block.name === 'IfCondition') {
            indentLevel += 1
        }

        if (block.name === 'ForCondition') {
            indentLevel += 1
        }

        if (indentLevel && block.holder && block.name !== 'IfEndCondition' && block.name !== 'ForEndCondition' && block.name !== 'IfCondition' && block.name !== 'ForCondition' && block.name !== 'ElseCondition') {

            if (indentLevel) {
                block.holder.classList.add(`indent-${indentLevel}`)
            }
        }

        if ((block.name === 'IfEndCondition' || block.name === 'IfCondition' || block.name === 'ElseCondition') && indentLevel > 1) {
            block.holder.classList.add(`indent-${indentLevel - 1}`)
        }

        if ((block.name === 'ForEndCondition' || block.name === 'ForCondition') && indentLevel > 1) {
            block.holder.classList.add(`indent-${indentLevel - 1}`)
        }
        // ElseCondition
        if (block.name === 'IfEndCondition' || block.name === 'ForEndCondition') {
            indentLevel -= 1
        }
    }
}