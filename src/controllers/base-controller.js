/**
 *  @property layout
 */
export default class BaseController {
    async render (method) {
        const content = await this[method]();
        return await this.layout.render(content)
    }

    async renderView(view, props){
        this.view = view
         return await view.render(props)
    }

    async afterRender () {
        await this.layout.afterRender()
        await this.view.afterRender()
    }

}