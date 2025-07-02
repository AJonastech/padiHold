import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { GreetingSection } from "@/components/dashboard/GreetingSection";
import { ActiveContracts } from "@/components/dashboard/ActiveContracts";
import { TransactionHistory } from "../../../components/dashboard/TransactionHistory";
import { EarningsChart } from "@/components/dashboard/EarningsChart";
import { NewContractCTA } from "../../../components/dashboard/NewContractCTA";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6">
      <DashboardHeader />
      <GreetingSection />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-16">
        <NewContractCTA />
        <ActiveContracts />
        <TransactionHistory />
        <EarningsChart />
      </div>
    </div>
  );
}
