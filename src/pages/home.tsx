import { createSignal } from "solid-js";
import { Navbar } from "../components/home/Navbar";
import { Vertex } from "../utils/Form";
import { newVertex } from "../utils/utils";
import { navItems, homeGalleryData } from "../data";
import { GallerySection } from "../components/home/GallerySection";
import List from "devextreme/ui/list";
import { Link } from "@solidjs/router";
import { Icon } from "@iconify-icon/solid";
import { DrawerComponent } from "../components/devextreme/Drawer";
import { ActionCards } from "../components/home/ActionCards";

export default function Home() {
  const navTemplate = function (e: Element) {
    return (
      <div
        ref={(el) => {
          new List(el, {
            itemTemplate: (itemData: any, itemIndex: any, itemElement: any) => {
              const itemParent = itemElement.parentElement;
              if (itemIndex == 0) {
                console.log(itemElement);
                itemParent.style.marginTop = "10px";
                itemParent.style.paddingBottom = "8px";
                itemParent.style.borderBottom = "1px solid #ddd";
              } else {
                itemParent.style.borderTop = "none";
                itemParent.style.marginBottom = "5px";
                itemParent.style.marginTop = "5px";
              }

              return (
                <div class={itemIndex==0 ? "flex flex:column jc:center gap:9 px:6" : "flex ai:center gap:10 px:6"}>
                  {itemIndex == 0 ? (
                    <>
                      <Icon icon={itemData.icon} width={30} style={{color: "#999"}} />
                      <Link
                        href={itemData.link}
                        class="text-decoration:none color:red font-weight:400"
                      >
                        {itemData.text}
                      </Link>
                    </>
                  ) : (
                    <>
                      <Icon icon={itemData.icon} width={17} />
                      <Link
                        href="#"
                        class="text-decoration:none color:#111 font-weight:400"
                      >
                        {itemData.text}
                      </Link>
                    </>
                  )}
                </div>
              );
            },
            dataSource: navItems,
            hoverStateEnabled: false,
            activeStateEnabled: false,
            focusStateEnabled: false,
            elementAttr: { class: "dx-theme-background-color" },
          });
        }}
      />
    );
  };

  const [isSideBarOpen, setSideBarOpen] = createSignal(false);

  // Meta and Data
  const navbarMeta = newVertex(0, ["Meta"], {
    id: "navbar",
    props: {
      height: "100vh",
      position: "right",
      openedStateMode: "overlap",
      closeOnOutsideClick: true,
      revealMode: "expand",
      maxSize: 250,
    },
  });

  const galleryMeta = newVertex(0, ["Meta"], {
    id: "gallery",
    props: { width: "100%", stretchImages: true },
  });

  const data = newVertex(0, ["Vertex"], {
    navbar: navItems,
    gallery: homeGalleryData,
  });

  const setValue = (attribute: Vertex, data: any) => {
    console.log(attribute, data);
  };

  return (
    <div class="">
      <DrawerComponent
        isSideBarOpen={isSideBarOpen}
        setSideBarOpen={setSideBarOpen}
        template={navTemplate}
        meta={navbarMeta}
        data={data}
        setValue={setValue}
      >
        <Navbar
          isSideBarOpen={isSideBarOpen}
          setSideBarOpen={setSideBarOpen}
          meta={navbarMeta}
          data={data}
          setValue={setValue}
        />

        <div class="p:15 bg:#f7f7f7 min-height:100vh">
          <ActionCards meta={galleryMeta} data={data} setValue={setValue} />

          <GallerySection meta={galleryMeta} data={data} setValue={setValue} />
        </div>
      </DrawerComponent>
    </div>
  );
}
