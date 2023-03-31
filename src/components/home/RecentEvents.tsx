import { Icon } from "@iconify-icon/solid";
import { A } from "@solidjs/router";
import { ComponentProps } from "../../utils/Form";

export function RecentEvents(props: ComponentProps) {
  return (
    <div class="pt:10">
      <header class="flex ai:center jc:space-between">
        <h3>{props.data.properties["title"]}</h3>
        <A
          href="#"
          class="text-decoration:none color:white bg:#f22952 p:3|10 r:5"
        >
          View all
        </A>
      </header>

      <div class="overflow:scroll flex gap:20">
        {props.data.properties[props.meta.properties.id].map(
          (item: {
            id: number;
            image: string;
            link: string;
            title: string;
            date: string;
            duration: string;
            lang: string;
            shareLink: string;
          }) => {
            return (
              <div class="shadow:1|2|10|#ccc r:6">
                <A href={item.link} class="rel block">
                  <small class="abs top:10 right:8 color:#ccc bg:#333 p:2|4 r:2">
                    {item.lang}
                  </small>
                  <Icon
                    icon="material-symbols:play-circle-outline"
                    width={30}
                    class="abs bottom:10 left:5 color:white"
                  />
                  <small class="abs bottom:10 right:5 color:white">
                    {item.duration}
                  </small>
                  <img src={item.image} class="w:250 r:6" alt="" />
                </A>
                <div class="flex jc:space-between ai:center rel p:2|4">
                  <A
                    href={item.link}
                    class="text-decoration:none color:#242424 flex flex:column gap:5"
                  >
                    <div class="font-weight:600">{item.title}</div>
                    <small>{item.date}</small>
                  </A>
                  <A href={item.shareLink}>
                    <Icon icon="material-symbols:share" width={20} />
                  </A>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
