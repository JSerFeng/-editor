import { Reducer } from 'redux';
import { RenderConfig, WidgetConfig } from '../render/interfaces';
import { StickFlags } from '../utils';
export interface Pos {
    w: number;
    h: number;
    x: number;
    y: number;
}
declare type MemoState = Pick<BaseState["workplace"], "renderConfig" | "selectedIndex" | "selectArea" | "selectedTool">;
export interface BaseState {
    workplace: {
        renderConfig: RenderConfig;
        currPageWidgets: WidgetConfig[];
        selectedIndex: number[] | null;
        canvas: {
            x: number;
            y: number;
            scale: number;
            centerPosition: {
                x: number;
                y: number;
                scale: number;
            };
        };
        selectArea: Pos;
        undoStack: MemoState[];
        redoStack: MemoState[];
        selectedTool: Tools | null;
        tmpPos: Pos[] /**暂存一些位置信息，用与多选在整体移动时，记住开始移动的位置 */;
        refLine: {
            stickFlag: StickFlags;
            stickPx: number;
            showPx: number;
        };
    };
}
export declare enum Types {
    ProjectName = "ProjectName",
    RenderConfig = "RenderConfig",
    SelectMultiple = "SelectMultiple",
    SelectOne = "SelectOne",
    AddItem = "AddItem",
    WidgetConfig = "WidgetConfig",
    ChangeWidgetShowInPage = "ChangeWidgetShowInPage",
    ChangeCanvasWH = "ChangeCanvasWH",
    StartWidgetChange = "StartWidgetChange",
    ChangeWidgetPos = "ChangeWidgetPos",
    CommitWidgetPosChange = "CommitWidgetPosChange",
    DeleteItem = "DeleteItem",
    CopySelected = "CopySelected",
    ResetDraw = "ResetDraw",
    ChangeWorkingPos = "ChangeWorkingPos",
    Undo = "Undo",
    Redo = "Redo",
    MoveCanvasToCenter = "MoveCanvasToCenter",
    SetInitCanvasPos = "SetInitCanvasPos",
    SelectTools = "SelectTools",
    StickFlags = "StickFlags",
    StickPx = "StickPx",
    ShowPx = "ShowPx",
    ExportJson = "ExportJson",
    ImportJson = "ImportJson",
    /**路由 */
    ChangeHistory = "ChangeHistory",
    AddPath = "AddPath",
    DeleteHistory = "DeleteHistory",
    ChangeRouterMode = "ChangeRouterMode",
    ChangeWidgetPath = "ChangeWidgetPath",
    ChangeWidgetExact = "ChangeWidgetExact"
}
/**编辑器可选择工具 */
export declare enum Tools {
    Drag = "Drag",
    Select = "Select"
}
export declare const AC: <T extends Types, P = null>(type: T, payload: P) => {
    type: T;
    payload: P;
};
export declare const EditorActions: {
    actProjectName: (name: string) => {
        type: Types.ProjectName;
        payload: string;
    };
    actSelect: (indexes: number[] | null) => {
        type: Types.SelectMultiple;
        payload: number[] | null;
    };
    actSelectOne: (idx: number | null) => {
        type: Types.SelectOne;
        payload: number | null;
    };
    actChangeCanvasWH: (pos: {
        w: number;
        h: number;
    }) => {
        type: Types.ChangeCanvasWH;
        payload: {
            w: number;
            h: number;
        };
    };
    actAddItem: (config: WidgetConfig) => {
        type: Types.AddItem;
        payload: WidgetConfig<any>;
    };
    actWidgetConfig: (config: WidgetConfig) => {
        type: Types.WidgetConfig;
        payload: WidgetConfig<any>;
    };
    actChangeWidgetShowInPage: (idx: number, show: boolean) => {
        type: Types.ChangeWidgetShowInPage;
        payload: {
            idx: number;
            show: boolean;
        };
    };
    actStartWidgetPos: (initPos: Pos) => {
        type: Types.StartWidgetChange;
        payload: Pos;
    };
    actChangeWidgetPos: (deltaX: number, deltaY: number) => {
        type: Types.ChangeWidgetPos;
        payload: {
            deltaX: number;
            deltaY: number;
        };
    };
    actCommitChangeWidgetPos: (pos: Pos) => {
        type: Types.CommitWidgetPosChange;
        payload: Pos;
    };
    actDeleteItems: () => {
        type: Types.DeleteItem;
        payload: null;
    };
    actCopySelectedItems: () => {
        type: Types.CopySelected;
        payload: null;
    };
    actResetDraw: () => {
        type: Types.ResetDraw;
        payload: null;
    };
    actChangeWorkingPos: (pos: {
        x: number;
        y: number;
        scale: number;
    }) => {
        type: Types.ChangeWorkingPos;
        payload: {
            x: number;
            y: number;
            scale: number;
        };
    };
    actUndo: () => {
        type: Types.Undo;
        payload: null;
    };
    actRedo: () => {
        type: Types.Redo;
        payload: null;
    };
    actMoveCanvasToCenter: () => {
        type: Types.MoveCanvasToCenter;
        payload: null;
    };
    actSetInitCanvasPos: (pos: {
        x: number;
        y: number;
        scale: number;
    }) => {
        type: Types.SetInitCanvasPos;
        payload: {
            x: number;
            y: number;
            scale: number;
        };
    };
    actSelectTool: (tool: Tools | null) => {
        type: Types.SelectTools;
        payload: Tools | null;
    };
    actStickFlags: (stickFlags: StickFlags) => {
        type: Types.StickFlags;
        payload: StickFlags;
    };
    actStickPx: (px: number) => {
        type: Types.StickPx;
        payload: number;
    };
    actShowPx: (px: number) => {
        type: Types.ShowPx;
        payload: number;
    };
    actImportJson: (renderConfig: RenderConfig) => {
        type: Types.ImportJson;
        payload: RenderConfig;
    };
    actChangeHistory: (historyIdx: number) => {
        type: Types.ChangeHistory;
        payload: number;
    };
    actAddPage: (path: string) => {
        type: Types.AddPath;
        payload: string;
    };
    actChangeWidgetPath: (path: string[]) => {
        type: Types.ChangeWidgetPath;
        payload: string[];
    };
    actRouterMode: (mode: "history" | "hash") => {
        type: Types.ChangeRouterMode;
        payload: "history" | "hash";
    };
    actChangeWidgetExact: (exact: boolean) => {
        type: Types.ChangeWidgetExact;
        payload: boolean;
    };
    actDeleteHistory: (idx: number) => {
        type: Types.DeleteHistory;
        payload: number;
    };
};
export declare type GetActionTypes<A extends {
    [k: string]: (...args: any[]) => {
        type: Types;
        payload: any;
    };
}> = {
    [K in keyof A]: ReturnType<A[K]>;
}[keyof A];
declare const reducer: Reducer<BaseState, GetActionTypes<typeof EditorActions>>;
export default reducer;
