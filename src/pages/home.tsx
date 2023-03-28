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

export default function Home() {
  const navTemplate = function (e: Element) {
    return (
      <div
        ref={(el) => {
          new List(el, {
            itemTemplate: (itemData: any) => {
              return (
                <div class="flex ai:center gap:10">
                  <Icon icon={itemData.icon} width={15} />
                  <Link
                    href="#"
                    class="text-decoration:none color:#111 font-weight:400"
                  >
                    {itemData.text}
                  </Link>
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

  const navbarMeta = newVertex(0, ["Meta"], {
    id: "navbar",
    props: {
      height: "100vh",
      position: "right",
      openedStateMode: "overlap",
      closeOnOutsideClick: true,
      revealMode: "expand",
      maxSize: 200,
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
    <div class="bg:#f7f7f7 min-height:100vh">
      <DrawerComponent
        isSideBarOpen={isSideBarOpen}
        setSideBarOpen={setSideBarOpen}
        template={navTemplate}
        meta={navbarMeta}
        data={data}
        setValue={setValue}
      >
        <Navbar isSideBarOpen={isSideBarOpen} setSideBarOpen={setSideBarOpen} meta={navbarMeta} data={data} setValue={setValue} />

        <div class="p:20">
          <GallerySection meta={galleryMeta} data={data} setValue={setValue} />
        </div>
      </DrawerComponent>
    </div>
  );
}
