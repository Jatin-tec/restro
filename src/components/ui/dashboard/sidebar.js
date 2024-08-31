"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BadgePercent,
  Bell,
  ChefHat,
  Grid2X2,
  Home,
  LineChart,
  QrCode,
  Salad,
  ShoppingCart,
  Store,
  TvMinimal,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: Home },
    {
      href: "#",
      label: "POS",
      icon: TvMinimal,
      badge: "Coming Soon",
    },
    {
      href: "/orders",
      label: "Live Orders",
      icon: ShoppingCart,
      badgeCount: 2,
    },
    { href: "/orders/all", label: "Orders", icon: ShoppingCart, badgeCount: 6 },
    { href: "/menu", label: "Menu", icon: Salad },
    { href: "/table", label: "Tables", icon: Grid2X2 },
    { href: "/offers", label: "Offers", icon: BadgePercent },
    { href: "/restaurant", label: "Outlet", icon: Store },
    { href: "#", label: "QR Codes", icon: QrCode },
    { href: "#", label: "Customers", icon: Users },
    { href: "#", label: "Finance", icon: LineChart },
  ];

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <ChefHat className="h-6 w-6" />
            <span className="">Restro</span>
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                    isActive ? "bg-muted text-primary" : ""
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                  {item.badge && (
                    <Badge
                      variant="outline"
                      className="ml-auto flex h-6 shrink-0 items-center justify-center rounded-full"
                    >
                      {item.badge}
                    </Badge>
                  )}
                  {item.badgeCount && (
                    <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                      {item.badgeCount}
                    </Badge>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="mt-auto p-4">
          <Card x-chunk="dashboard-02-chunk-0">
            <CardHeader className="p-2 pt-0 md:p-4">
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our support
                team.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
              <Button size="sm" className="w-full">
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
