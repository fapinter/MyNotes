import { Card } from "primereact/card";
import { Skeleton } from "primereact/skeleton";
import { useState } from "react";

export default function Dashboard(){
    const [dashboard, setDashboard] = useState(null);
    const [error, setError] = useState("");

    const loadDashboard = async () => {
        try {
            const res = await getDashboard();
            setDashboard(res);
        } catch ( err : any ){
            setError("Erro ao buscar dashboard: " + err);
        }

    }

    return (
        <div className="w-full h-full py-[1%]">
            <div className="w-full h-[50%] grid grid-cols-2 gap-4">

                <Card title="To Do Lists" className="w-full h-[100%] bg-light_bg overflow-auto px-[2.5%]">
                    
                    <Skeleton width="50%" height="2rem"></Skeleton>
                    <Skeleton width="50%" height="2rem"></Skeleton>
                    <Skeleton width="50%" height="2rem"></Skeleton>
                    <Skeleton width="50%" height="2rem"></Skeleton>
                    <Skeleton width="50%" height="2rem"></Skeleton>
                    <Skeleton width="50%" height="2rem"></Skeleton>
                    <Skeleton width="50%" height="2rem"></Skeleton>
                    <Skeleton width="50%" height="2rem"></Skeleton>
                    
                    

                </Card>
            </div>
        </div>
    )
}