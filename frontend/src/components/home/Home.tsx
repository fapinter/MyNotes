import { Menubar } from 'primereact/menubar';
import { Outlet } from 'react-router-dom';

export default function Home() {
    function exportStyle(){
        console.log("exportando estilos");
    }
    function exportWorkspaces(){
        console.log("exportando workspaces");
    }

    const menu_items = [
        {   label: 'Home', icon: 'pi pi-home', url: '/' },
        {   label: 'Export Data', icon: 'pi pi-file-export',
            items: [
                {label: 'Export Style', icon: 'pi pi-palette', command: () => {exportStyle()}},
                {label: 'Export Workspaces', icon: 'pi pi-folder-open', command: () => {exportWorkspaces()}}
            ]
        },
        {   label: 'Settings', icon: 'pi pi-cog', url: '/settings'},
    ]

    return (
        <div className="w-screen h-screen bg-background flex align-items-center flex-col px-[2.5%] py-[1%]">
            <Menubar  model={menu_items} className='w-full h-[7.5%] bg-light_bg flex justify-end px-[1%]'/>
            <Outlet/>
        </div>
    );
}