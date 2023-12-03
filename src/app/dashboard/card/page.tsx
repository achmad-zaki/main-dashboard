import { Metadata } from 'next'

// icon
import { FaUserFriends } from "react-icons/fa";

// component
import CardComponent from "@/components/card";

export const metadata: Metadata = {
  title: 'Card',
}

export default function CardPage() {
  return (
    <section className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
      <CardComponent
        title="total siswa"
        count={100}
        icon={<FaUserFriends size={20} />}
        variant="blue"
      />
      <CardComponent
        title="total siswa"
        count={300}
        icon={<FaUserFriends size={20} />}
        variant="orange"
      />
      <CardComponent
        title="total siswa"
        count={50}
        icon={<FaUserFriends size={20} />}
        variant="green"
      />
    </section>
  )
}
