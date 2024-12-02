import ExpensesOutput from '@/components/ExpensesOutput/ExpensesOutput';
import { Text } from 'react-native';

function RecentExpenses() {
  return <ExpensesOutput expensesPeriod="Last 7 Days" />;
}

export default RecentExpenses;
