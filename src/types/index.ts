//导航接口
export interface navigateInter {
    id:string,
    title:string
}

export type navigates = Array<navigateInter>

//代做清单接口

export interface todoInter {
    id:string,
    content:string,
    done?:boolean
}