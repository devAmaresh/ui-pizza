import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CreditCard,
  DollarSign,
  ChevronUp,
  ChevronDown,
  FileText,
  Calendar,
  Download,
  Printer,
  TrendingUp,
  TrendingDown,
  Filter,
} from "lucide-react";

const Reports = () => {
  // Dummy financial data
  const revenueByMonth = [
    { month: "Jan", amount: 14230, change: +5.4 },
    { month: "Feb", amount: 15840, change: +11.3 },
    { month: "Mar", amount: 17250, change: +8.9 },
    { month: "Apr", amount: 19120, change: +10.8 },
    { month: "May", amount: 18430, change: -3.6 },
    { month: "Jun", amount: 21540, change: +16.9 },
  ];

  const expenseCategories = [
    { category: "Ingredients", amount: 8245.32, trend: "up", percentage: 2.1 },
    { category: "Staff Wages", amount: 5840.0, trend: "up", percentage: 4.3 },
    { category: "Delivery", amount: 2340.5, trend: "down", percentage: 1.2 },
    { category: "Utilities", amount: 1820.75, trend: "up", percentage: 6.8 },
    { category: "Marketing", amount: 1250.0, trend: "down", percentage: 3.5 },
  ];

  const topProducts = [
    { name: "Pepperoni Pizza", revenue: 4250.3, percentage: 35 },
    { name: "Margherita Pizza", revenue: 3180.45, percentage: 26 },
    { name: "BBQ Chicken Pizza", revenue: 2100.2, percentage: 17 },
    { name: "Hawaiian Pizza", revenue: 1450.7, percentage: 12 },
    { name: "Vegetarian Pizza", revenue: 1220.37, percentage: 10 },
  ];

  const taxSummary = [
    { quarter: "Q1 2023", revenue: 6245.3, tax: 561.45 },
    { quarter: "Q2 2023", revenue: 8124.8, tax: 731.22 },
    { quarter: "Q3 2023", revenue: 7845.65, tax: 706.1 },
    { quarter: "Q4 2023", revenue: 5268.57, tax: 350.05 },
  ];

  return (
    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold">Financial Reports</h3>
          <p className="text-sm text-muted-foreground">
            Revenue, expenses, and profit analysis
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1.5"
          >
            <Download className="h-4 w-4" />
            <span>Export</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1.5"
          >
            <Printer className="h-4 w-4" />
            <span>Print</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1.5"
          >
            <Calendar className="h-4 w-4" />
            <span>Last 30 days</span>
            <ChevronDown className="h-3 w-3 ml-1" />
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-card/60 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">$27,484.32</div>
                <div className="flex items-center mt-1 text-xs text-green-500">
                  <ChevronUp className="h-3 w-3" />
                  <span>+18.2% vs last period</span>
                </div>
              </div>
              <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-green-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/60 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">$19,496.57</div>
                <div className="flex items-center mt-1 text-xs text-red-500">
                  <ChevronUp className="h-3 w-3" />
                  <span>+7.4% vs last period</span>
                </div>
              </div>
              <div className="h-12 w-12 rounded-full bg-red-500/10 flex items-center justify-center">
                <CreditCard className="h-6 w-6 text-red-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/60 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Net Profit</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">$7,987.75</div>
                <div className="flex items-center mt-1 text-xs text-green-500">
                  <ChevronUp className="h-3 w-3" />
                  <span>+5.3% vs last period</span>
                </div>
              </div>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/60 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Profit Margin</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">29.1%</div>
                <div className="flex items-center mt-1 text-xs text-red-500">
                  <ChevronDown className="h-3 w-3" />
                  <span>-2.4% vs last period</span>
                </div>
              </div>
              <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                <FileText className="h-6 w-6 text-blue-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Revenue Chart */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Monthly Revenue</CardTitle>
              <CardDescription>
                Last 6 months financial performance
              </CardDescription>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-1"
            >
              <Filter className="h-4 w-4" />
              <span>Filters</span>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <div className="flex items-end h-full gap-2 pt-6 pb-2">
              {revenueByMonth.map((month) => (
                <div
                  key={month.month}
                  className="flex-1 flex flex-col items-center"
                >
                  <div className="w-full group relative">
                    <div
                      className="w-full bg-primary/70 hover:bg-primary rounded-t transition-all cursor-pointer"
                      style={{ height: `${(month.amount / 22000) * 230}px` }}
                    />
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      ${month.amount.toLocaleString()}
                    </div>
                  </div>
                  <div className="flex flex-col items-center mt-2">
                    <span className="text-sm font-medium">{month.month}</span>
                    <span
                      className={`text-xs ${
                        month.change >= 0 ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {month.change >= 0 ? "+" : ""}
                      {month.change}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Expense Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Expenses</CardTitle>
            <CardDescription>Cost breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {expenseCategories.map((expense) => (
                <li
                  key={expense.category}
                  className="flex items-center justify-between"
                >
                  <div className="flex-1">
                    <div className="flex justify-between text-sm font-medium">
                      <span>{expense.category}</span>
                      <span>${expense.amount.toLocaleString()}</span>
                    </div>
                    <div className="mt-1 flex items-center text-xs">
                      {expense.trend === "up" ? (
                        <ChevronUp className="h-3 w-3 text-red-500" />
                      ) : (
                        <ChevronDown className="h-3 w-3 text-green-500" />
                      )}
                      <span
                        className={
                          expense.trend === "up"
                            ? "text-red-500"
                            : "text-green-500"
                        }
                      >
                        {expense.trend === "up" ? "+" : "-"}
                        {expense.percentage}%
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="border-t pt-4 flex justify-between">
            <span className="text-sm font-medium">Total Expenses</span>
            <span className="text-sm font-bold">$19,496.57</span>
          </CardFooter>
        </Card>

        {/* Top Products */}
        <Card>
          <CardHeader>
            <CardTitle>Revenue by Products</CardTitle>
            <CardDescription>Top performing menu items</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product) => (
                <div key={product.name} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span>{product.name}</span>
                    <span className="font-medium">
                      $
                      {product.revenue.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${product.percentage * 2.5}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-right text-muted-foreground">
                    {product.percentage}%
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <Button variant="ghost" size="sm" className="ml-auto">
              View Full Product Analysis
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Tax Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Tax Summary</CardTitle>
          <CardDescription>YTD tax information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1 bg-muted/40 p-4 rounded-lg">
                <div className="text-sm text-muted-foreground">
                  Sales Tax Collected
                </div>
                <div className="text-xl font-bold">$2,348.82</div>
              </div>
              <div className="space-y-1 bg-muted/40 p-4 rounded-lg">
                <div className="text-sm text-muted-foreground">
                  Income Tax (Est.)
                </div>
                <div className="text-xl font-bold">$4,826.5</div>
              </div>
            </div>

            <div className="pt-4 space-y-2">
              <h4 className="text-sm font-medium">Quarterly Breakdown</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="text-xs text-muted-foreground">
                    <tr>
                      <th className="text-left py-2">Quarter</th>
                      <th className="text-right py-2">Revenue</th>
                      <th className="text-right py-2">Tax</th>
                      <th className="text-right py-2">Tax Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {taxSummary.map((quarter) => (
                      <tr key={quarter.quarter} className="border-t">
                        <td className="py-3">{quarter.quarter}</td>
                        <td className="text-right">
                          ${quarter.revenue.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                          })}
                        </td>
                        <td className="text-right">
                          ${quarter.tax.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                          })}
                        </td>
                        <td className="text-right">
                          {((quarter.tax / quarter.revenue) * 100).toFixed(1)}%
                        </td>
                      </tr>
                    ))}
                    <tr className="border-t border-t-primary/20">
                      <td className="py-3 font-medium">Total YTD</td>
                      <td className="text-right font-medium">
                        ${taxSummary.reduce(
                          (sum, q) => sum + q.revenue,
                          0
                        ).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </td>
                      <td className="text-right font-medium">
                        ${taxSummary.reduce((sum, q) => sum + q.tax, 0).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </td>
                      <td className="text-right font-medium">
                        {(
                          (taxSummary.reduce((sum, q) => sum + q.tax, 0) /
                            taxSummary.reduce((sum, q) => sum + q.revenue, 0)) *
                          100
                        ).toFixed(1)}
                        %
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t pt-4">
          <Button variant="outline" size="sm" className="gap-1.5">
            <Download className="h-4 w-4" />
            <span>Download Tax Report</span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Reports;
