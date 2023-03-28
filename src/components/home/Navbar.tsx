import { Icon } from "@iconify-icon/solid";
import { createSignal } from "solid-js";
import { ComponentProps } from "../../utils/Form";
import { DrawerComponent } from "../devextreme/Drawer";
import List from "devextreme/ui/list";
import { Link } from "@solidjs/router";

export function Navbar(props: ComponentProps & {isSideBarOpen: any; setSideBarOpen: any}) {
  const {isSideBarOpen, setSideBarOpen} = props;
  // const navTemplate = function (e: Element) {
  //   return (
  //     <div
  //       class="custom-calls"
  //       ref={(el) => {

  //         new List(el, {
  //           itemTemplate: (itemData: any) => {
  //             return (
  //               <div class="flex ai:center gap:10">
  //                 <Icon icon={itemData.icon} width={15} />
  //                 <Link href="#" class="text-decoration:none color:#111 font-weight:400">{itemData.text}</Link>
  //               </div>
  //             );
  //           },
  //           dataSource: props.data.properties[props.meta.properties.id],
  //           hoverStateEnabled: false,
  //           activeStateEnabled: false,
  //           focusStateEnabled: false,
  //           elementAttr: { class: "dx-theme-background-color" },
  //         });
  //       }
  //       }
  //     />
  //   )
  // };

  // const [isSideBarOpen, setSideBarOpen] = createSignal(false);

  return (
    // <DrawerComponent
    //   isSideBarOpen={isSideBarOpen}
    //   setSideBarOpen={setSideBarOpen}
    //   template={navTemplate}
    //   meta={props.meta}
    //   data={props.data}
    //   setValue={props.setValue}
    // >
      <nav class="bg:white box-shadow:1|1|10|#ddd p:10 flex jc:space-between ai:center">
        <div>AVF App</div>

        {/* Actions */}
        <div class="flex ai:center jc:center gap:8">
          <div class="cursor:pointer">
            <Icon icon="material-symbols:search"  width={20} />
          </div>
          <div
            class="cursor:pointer"
            onclick={() => {
              console.log("clicked");
              setSideBarOpen(!isSideBarOpen());
            }}
          >
            <Icon icon="mdi:hamburger-menu" width={25} height={25} />
          </div>
        </div>
      </nav>


    // </DrawerComponent>
  );
}
