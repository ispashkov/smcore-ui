import { AppPath } from '../types/path.types'
import { UserType } from '../types/users.types'
import { ProductsPageSection } from '../pages/products-page/products-page.types'
import { Days } from '../types/days.types'
import { PaymentMethod, PaymentType } from '../types/payment.types'
import { TransactionStatus } from '../types/transactions.types'
import { ClientSex } from '../types/clients.types'
import { ClientsEditPageSection } from '../pages/clients-edit-page/clients-edit-page.types'
import { isDef, NString } from '../types/lang.types'
import { ClientSubscriptionStatus } from '../types/clients-subscriptions.types'
import { TimeLimitation } from '../types/time-limitation.types'

export function formatPathName(path: AppPath): string {
  switch (path) {
    case AppPath.HOME:
      return 'Главная'
    case AppPath.NOT_FOUND:
      return '404'
    case AppPath.SCHEDULE:
      return 'Расписание'
    case AppPath.SCHEDULE_GROUP:
      return 'Группа'
    case AppPath.SCHEDULE_MANAGEMENT:
      return 'Управление расписанием'
    case AppPath.PRODUCTS:
      return 'Абонементы'
    case AppPath.PRODUCTS_CREATE_SUBSCRIPTION:
      return 'Добавить абонемент'
    case AppPath.PRODUCTS_EDIT_SUBSCRIPTION:
      return 'Редактировать абонемент'
    case AppPath.PRODUCTS_CREATE_SERVICE:
      return 'Добавить услугу'
    case AppPath.PRODUCTS_EDIT_SERVICE:
      return 'Редактировать услугу'
    case AppPath.DISCOUNTS:
      return 'Акции'
    case AppPath.TRANSACTIONS:
      return 'Транзакции'
    case AppPath.TRANSACTIONS_CREATE:
      return 'Новая транзакция'
    case AppPath.STUDIOS:
      return 'Студии'
    case AppPath.STUDIOS_CREATE:
      return 'Добавить студию'
    case AppPath.STUDIOS_EDIT:
      return 'Редактировать студию'
    case AppPath.SETTINGS:
      return 'Настройки'
    case AppPath.FRANCHISES:
      return 'Франшиза'
    case AppPath.FRANCHISES_CREATE:
      return 'Добавить франшизу'
    case AppPath.FRANCHISES_EDIT:
      return 'Редактировать франшизу'
    case AppPath.EMPLOYEES:
      return 'Список сотрудников'
    case AppPath.EMPLOYEES_CREATE:
      return 'Добавить сотрудника'
    case AppPath.EMPLOYEES_EDIT:
      return 'Редактировать сотрудника'
    case AppPath.DIRECTIONS:
      return 'Направления'
    case AppPath.DIRECTIONS_CREATE:
      return 'Добавить направление'
    case AppPath.DIRECTIONS_EDIT:
      return 'Редактировать направление'
    case AppPath.CLIENTS:
      return 'Список клиентов'
    case AppPath.CLIENTS_CREATE:
      return 'Добавить клиента'
    case AppPath.CLIENTS_EDIT:
      return 'Редактировать клиента'
  }
}

export function formatUserType(userType: UserType): string {
  switch (userType) {
    case UserType.Administrator:
      return 'Администратор'
    case UserType.Trainer:
      return 'Тренер'
    case UserType.Manager:
      return 'Менеджер'
    case UserType.All:
      return 'Все сотрудники'
  }
}

export function formatFullName(firstName: NString, lastName: NString, middleName?: NString): string {
  if (isDef(firstName) && isDef(lastName)) {
    if (isDef(middleName)) {
      return `${lastName} ${firstName} ${middleName}`
    }

    return `${lastName} ${firstName}`
  }

  if (isDef(middleName)) {
    return `${lastName} ${firstName} ${middleName}`
  }

  return DEFAULT_EMPTY_SYMBOL
}

export function formatProductsPageSectionName(section: ProductsPageSection): string {
  switch (section) {
    case ProductsPageSection.GROUP_SUBSCRIPTIONS:
      return 'Абонементы подписки'
    case ProductsPageSection.INDIVIDUAL_SUBSCRIPTIONS:
      return 'Абонементы индивидуальные'
    case ProductsPageSection.SERVICES:
      return 'Разовые услуги'
  }
}

export function formatPluralized(num: number, ends: string[]): string {
  const n = Math.abs(num) % 100
  const remainder = n % 10

  if (n > 10 && n < 20) {
    return `${num} ${ends[2]}`
  }

  if (remainder > 1 && remainder < 5) {
    return `${num} ${ends[1]}`
  }

  if (remainder === 1) {
    return `${num} ${ends[0]}`
  }

  return `${num} ${ends[2]}`
}

export function formatDays(day: Days): string {
  switch (day) {
    case Days.MONDAY:
      return 'Пн'
    case Days.TUESDAY:
      return 'Вт'
    case Days.WEDNESDAY:
      return 'Ср'
    case Days.THURSDAY:
      return 'Чт'
    case Days.FRIDAY:
      return 'Пт'
    case Days.SATURDAY:
      return 'Сб'
    case Days.SUNDAY:
      return 'Вс'
  }
}

export function formatPaymentType(paymentType: PaymentType): string {
  switch (paymentType) {
    case PaymentType.ON_PLACE:
      return 'Оплата на месте'
    case PaymentType.ONE_TIME:
      return 'Единоразовая оплата'
    case PaymentType.SUBSCRIPTION:
      return 'Абонемент'
    case PaymentType.TRIAL:
      return 'Триал'
  }
}

export function formatPaymentMethod(paymentType: PaymentMethod): string {
  switch (paymentType) {
    case PaymentMethod.CARD:
      return 'Банковская карта'
    case PaymentMethod.CASH:
      return 'Наличные'
    case PaymentMethod.SMS:
      return 'СМС'
    case PaymentMethod.QR:
      return 'QR'
  }
}

export function formatTransactionStatus(status: TransactionStatus): string {
  switch (status) {
    case TransactionStatus.PAID:
      return 'Оплачено'
    case TransactionStatus.UNPAID:
      return 'Не оплачено'
    case TransactionStatus.REFUND:
      return 'Возврат'
  }
}

export function formatClientSex(sex: ClientSex): string {
  switch (sex) {
    case ClientSex.F:
      return 'Женский'
    case ClientSex.M:
      return 'Мужской'
    case ClientSex.U:
      return 'Не указано'
  }
}

export function formatPluralize(amount: number, variants: string[]): string {
  const n = Math.abs(amount) % 100
  const n1 = n % 10

  if (n > 10 && n < 20) {
    return variants[2]
  }

  if (n1 > 1 && n1 < 5) {
    return variants[1]
  }

  if (n1 === 1) {
    return variants[0]
  }

  return variants[2]
}

export function formatClientsEditPageSection(section: ClientsEditPageSection): string {
  switch (section) {
    case ClientsEditPageSection.OVERVIEW:
      return 'Карточка'
    case ClientsEditPageSection.BOOKINGS_ACTIVE:
      return 'Активные записи'
    case ClientsEditPageSection.BOOKINGS_HISTORY:
      return 'История посещений'
    case ClientsEditPageSection.PURCHASES:
      return 'Покупки'
    case ClientsEditPageSection.SUBSCRIPTIONS:
      return 'Абонементы'
  }
}

export function formatClientSubscriptionStatus(status: ClientSubscriptionStatus): string {
  switch (status) {
    case ClientSubscriptionStatus.NEW:
      return 'Ожидает активации'
    case ClientSubscriptionStatus.ACTIVE:
      return 'Активный'
    case ClientSubscriptionStatus.EXPIRED:
      return 'Истек'
    case ClientSubscriptionStatus.HOLD:
      return 'Заморожен'
    case ClientSubscriptionStatus.REFUNDED:
      return 'Возврат'
  }
}

export function formatTimeLimitation(timeLimitation: TimeLimitation): string {
  switch (timeLimitation) {
    case TimeLimitation.NONE:
      return 'Весь день'
    case TimeLimitation.UNTIL_1645:
      return 'До 16:45'
  }
}

export function formatReceiptNumber(number: string): string {
  return `ОФД: ${number}`
}

export function formatText(text?: NString): string {
  return isDef(text) ? text : DEFAULT_EMPTY_SYMBOL
}

export const DEFAULT_EMPTY_SYMBOL = '-'
