import React from 'react';
import { Typography, Box } from '@mui/material';
import { Container, Logo, SectionTitle } from './TransactionsPage.styles';
import TransactionCard from '../../components/TransactionCard/TransactionCard';
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation';
import PaymentIcon from '@mui/icons-material/Payment';
import { format, parseISO } from 'date-fns';

const TransactionsPage = ({ transactions }) => {
  const groupTransactionsByMonth = (transactions) => {
    if (!Array.isArray(transactions)) return {}; // Return an empty object if transactions is not an array
    return transactions.reduce((groups, transaction) => {
      const date = parseISO(transaction.date);
      const month = format(date, 'MMMM yyyy');
      if (!groups[month]) {
        groups[month] = [];
      }
      groups[month].push(transaction);
      return groups;
    }, {});
  };

  const groupedTransactions = groupTransactionsByMonth(transactions);

  return (
    <Container>
      <Logo src="https://zevtron.com/wp-content/uploads/2024/01/logo-1.jpg" alt="Zevtron Logo" />
      <Typography variant="h5" gutterBottom>Transactions</Typography>
      {Object.keys(groupedTransactions).length > 0 ? (
        Object.keys(groupedTransactions).map(month => (
          <Box key={month} mt={2}>
            <SectionTitle>{month}</SectionTitle>
            {groupedTransactions[month].map((transaction, index) => (
              <TransactionCard
                key={index}
                icon={<PaymentIcon style={{ color: '#9E9E9E' }} />}
                title={`$${transaction.amount.toFixed(2)} | ${transaction.description}`}
                subtitle={transaction.location}
                description={`${format(parseISO(transaction.date), 'MMMM d | h:mm a')} | ${transaction.method}`}
              />
            ))}
          </Box>
        ))
      ) : (
        <Typography variant="body1" color="textSecondary">No transactions available.</Typography>
      )}
      <BottomNavigation value={2} />
    </Container>
  );
};

export default TransactionsPage;
