import { ComponentProps } from "../../utils/Form";
import { GalleryComponent } from "../devextreme/Gallery";

export function GallerySection(props: ComponentProps) {
  return (
    <div>
      <GalleryComponent
        meta={props.meta}
        data={props.data}
        setValue={props.setValue}
      />
    </div>
  );
}
