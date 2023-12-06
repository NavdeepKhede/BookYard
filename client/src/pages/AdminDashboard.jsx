/* eslint-disable react/prop-types */
import { BookCopy, Users2, ListTodo, ShieldAlert } from "lucide-react";
import { Overview } from "@/components/overview";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useAllReservation, useGetAllUsers } from "@/hooks/useAdmin";

const AdminDashboard = ({ totalBooks }) => {
  const { totalUsers } = useGetAllUsers();
  const { totalReservations, pendingReservation } = useAllReservation();

  return (
    <div className="p-4 sm:px-8 w-full flex flex-col space-y-2">
      <h1 className="text-lg font-semibold uppercase">Overview</h1>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        </div> */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Books</CardTitle>
            <BookCopy className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+{totalBooks}</div>
            <p className="text-xs text-muted-foreground">
              Available in library
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users2 className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+{totalUsers}</div>
            <p className="text-xs text-muted-foreground">
              Registered to BookYard
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Reservations
            </CardTitle>
            <ListTodo className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+{totalReservations}</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Pending Requests
            </CardTitle>
            <ShieldAlert className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingReservation}</div>
            <p className="text-xs text-muted-foreground">To handle</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 h-full">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle className="text-lg">Analytics</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
