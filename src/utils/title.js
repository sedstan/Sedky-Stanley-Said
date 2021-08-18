function getTitle(vm) {
    const { title } = vm.$options

    if (title) {
        return typeof title === 'function' ? title.call(vm) : `Sedky Stanley Said`
    }
}

export default {
    created() {
        const title = getTitle(this);
        if (title) { document.title = title }
    }
}
