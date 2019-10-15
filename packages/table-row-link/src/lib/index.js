const findParentRow = node => {
    let row = false,
        parent = node.parentNode;
    while(parent && !row){
        if(parent.tagName === 'TR') row = parent;
        parent = parent.parentNode
    }
    return row;
};

export default (node, settings) => {
    const state = {
        node,
        settings,
        row: findParentRow(node),
    };

    state.row.addEventListener('focusin', e => {
        state.row.classList.add(settings.activeClassName);
    });
    state.row.addEventListener('focusout', e => {
        state.row.classList.remove(settings.activeClassName);
    });

    return state;
};