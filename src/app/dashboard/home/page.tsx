import { Metadata } from "next"

// icon
import { FaUserFriends } from "react-icons/fa";

// component
import CardComponent from "@/components/card"
import TableComponent from "@/components/table";
import DoughnutChartComponent from "@/components/chart/doughnut";
import LineChartComponent from "@/components/chart/line";
import PieChartComponent from "@/components/chart/pie";

export const metadata: Metadata = {
    title: 'Home',
}

export default function HomePage() {
    return (
        <section>
            <div className="grid mb-6 gap-6 md:grid-cols-2 xl:grid-cols-4">
                <CardComponent
                    title="total client"
                    count={239}
                    icon={<FaUserFriends size={20} />}
                    variant="blue"
                />
                <CardComponent
                    title="account balance"
                    count={23.23}
                    icon={<FaUserFriends size={20} />}
                    variant="green"
                />
                <CardComponent
                    title="new sales"
                    count={1000}
                    icon={<FaUserFriends size={20} />}
                    variant="green"
                />
                <CardComponent
                    title="pending contacts"
                    count={23}
                    icon={<FaUserFriends size={20} />}
                    variant="orange"
                />
            </div>
            <TableComponent
                className="mb-6"
                headers={["client", "amount", "status", "date"]}
                bodies={[
                    {
                        client: "Jese Leos",
                        amount: "$456.00",
                        status: "accept",
                        date: "2020-01-01",
                    },
                    {
                        client: "Jese Leos",
                        amount: "$456.00",
                        status: "accept",
                        date: "2020-01-01",
                    }
                ]}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <DoughnutChartComponent />
                <LineChartComponent />
                <PieChartComponent/>
            </div>
        </section>
    )
}
