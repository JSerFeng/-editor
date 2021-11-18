/// <reference types="react" />
import { Dispatch as ReduxDispatch } from "redux";
import { ReactComp, WidgetConfig, WidgetConfigProp } from "@v-editor/widgets-center";
declare const _default: import("react").NamedExoticComponent<{
    widgetConfig: WidgetConfig<any>;
    dispatch: ReduxDispatch<import("redux").AnyAction>;
    CustomConfig?: ReactComp<WidgetConfigProp<any>> | null | undefined;
}>;
export default _default;
