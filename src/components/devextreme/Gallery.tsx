import { ComponentProps } from "../../utils/Form";
import Gallery, {Properties} from "devextreme/ui/gallery";
import { createEffect, For, Show } from "solid-js";

export function GalleryComponent(props: ComponentProps) {
    return (
      <div aria-labelledby={props["aria-labeledby"]}>
        <div
          ref={(el) => {
            const instance = new Gallery(el, {
                height: "100%",
            });

            createEffect(() =>
              instance.option(
                "dataSource",
                props.data.properties[props.meta.properties.id]
              )
            );

            createEffect(() => {
              for (const property in props.meta.properties.props as Properties) {
                instance.option(property, props.meta.properties.props[property]);
              }
            });
          }}
        />
        <Show when={props.errors}>
          <For each={Object.values(props.errors!)}>
            {(errorMsg: string) => <small>{errorMsg}</small>}
          </For>
        </Show>
      </div>
    );
  }
