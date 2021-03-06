use yew::prelude::*;
use crate::{AppRouterAnchor, AppRoute};

pub struct Components {}

impl Component for Components {
    type Message = ();
    type Properties = ();

    fn create(_: Self::Properties, _: ComponentLink<Self>) -> Self {
        Self {}
    }

    fn update(&mut self, _msg: Self::Message) -> ShouldRender { false }

    fn change(&mut self, _props: Self::Properties) -> bool { false }

    fn view(&self) -> Html {
        let component_card = |name, route| html! {
        <AppRouterAnchor route=route>
            // TODO make these images from screenshots
            <img src="https://material.angular.io/assets/screenshots/button.scene.png"/>
            <h6>{ name }</h6>
        </AppRouterAnchor>
        };
        html! {
        <section class="components-grid">
            { component_card("Button", AppRoute::Button) }
            { component_card("Checkbox", AppRoute::Checkbox) }
            { component_card("Radio", AppRoute::Radio) }
            { component_card("Switch", AppRoute::Switch) }
            { component_card("Floating Action Button", AppRoute::Fab) }
            { component_card("Icon Button", AppRoute::IconButton) }
            { component_card("Icon", AppRoute::Icon) }
            { component_card("Circular Progress", AppRoute::CircularProgress) }
            { component_card("Dialog", AppRoute::Dialog) }
            // TODO { component_card("Drawer", AppRoute::Drawer) }
            { component_card("Form Field", AppRoute::FormField) }
            { component_card("Linear Progress", AppRoute::LinearProgress) }
            { component_card("List", AppRoute::List) }
            { component_card("Icon Button Toggle", AppRoute::IconButtonToggle) }
            { component_card("Slider", AppRoute::Slider) }
            { component_card("Tabs", AppRoute::Tabs) }
            { component_card("Snackbar", AppRoute::Snackbar) }
            { component_card("TextField", AppRoute::Textfield) }
            { component_card("TextArea", AppRoute::TextArea) }
            { component_card("Select", AppRoute::Select) }
            { component_card("Menu", AppRoute::Menu) }
        </section>
       }
    }
}
