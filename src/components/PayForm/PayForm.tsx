import react from "react";

/**
 * Наименование оператора
 * Поле ввода телефона с маской и валидацией
 * Поле ввода суммы в рублях с маской и валидацией ( 1 - 1000 руб. )
 * Кнопка подтверждения
 * Эмуляция апи ( рандом успеха / ошибки )
 */

export type PayFormProps = {
  id: number;
  name: string;
};

const PayForm: React.FC<PayFormProps> = () => {
  return <div>PayForm</div>;
};

export default PayForm;
