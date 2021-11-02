/**
 *  @property layout
 */
export default class BaseController {
    render (method) {
        const content = this[method]();
        return this.layout.render(content)
    }

    renderView(view, props){
        this.view = view
        return view.render(props)
    }

    afterRender () {
        this.view.afterRender()
    }

}