import { format, parseISO } from 'date-fns';

const formatDate = (date: Date | undefined): string => {
  if (!date) {
    return '--/--/--';
  }
  return format(parseISO(String(date)), 'dd/MM/yyyy');
};

export default formatDate;
