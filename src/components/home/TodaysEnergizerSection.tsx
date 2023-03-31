import { Icon } from "@iconify-icon/solid";
import { A } from "@solidjs/router";
import { ComponentProps } from "../../utils/Form";

export function TodaysEnergizerSection(props: ComponentProps) {
    return (
        <div class="pt:10">
            <header class="flex ai:center jc:space-between">
                <h3>{props.data.properties["title"]}</h3>
                <A href="#" class="text-decoration:none color:white bg:#f22952 p:3|10 r:5">View all</A>
            </header>

            <div class="overflow:scroll flex gap:20">
                {props.data.properties[props.meta.properties.id]
                .map((item: any) => {
                    return (
                        <a href={item.link} class="rel block">
                            <small class="abs top:10 left:8 color:#ccc bg:#333 p:2|4 r:2">{item.lang}</small>
                            <Icon icon="material-symbols:play-circle-outline" width={30} class="abs bottom:10 left:5 color:white" />
                            <img src={item.image} class="w:250 r:6" alt="" />
                        </a>
                    )}
                )}
            </div>
        </div>
    )
}
