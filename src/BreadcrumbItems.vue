<script>
function wrap(wrapper, fn) {
    return (e) => {
        if(typeof fn === 'function') {
            fn(e);
        }

        if(!e.cancelBubble) {
            wrapper(e);
        }
    };
}

function listener(vnode, key) {
    return vnode.data.on[key] || (
        vnode.componentOptions &&
        vnode.componentOptions.listeners &&
        vnode.componentOptions.listeners[key]
    );
}

export default {
    functional: true,

    render(h, context) {
        return context.children
            .filter(vnode => !!vnode.tag)
            .map((vnode, i) => {
                vnode.data = Object.assign({staticClass: undefined}, vnode.data);
                
                if(!vnode.data.attrs) {
                    vnode.data.attrs = {};
                }
                
                if(!vnode.data.on) {
                    vnode.data.on = {};
                }

                vnode.data.on.click = wrap(e => {
                    context.parent.$emit('click-item', e, vnode);
                }, listener(vnode, 'click'));

                const active = context.children.indexOf(vnode) === context.children.length - 1;
                
                const children = vnode.componentOptions ? vnode.componentOptions.children : vnode.children;
                
                return h('li', {
                    class: {
                        active,
                        'breadcrumb-item': true,
                    },
                }, [!active ? vnode : children]);
            });
    }

};
</script>
