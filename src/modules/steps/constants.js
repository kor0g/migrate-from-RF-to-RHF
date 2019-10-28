import { FinanceForm } from '../finance'
import { ContactsForm } from '../contacts'
import { PassportForm } from '../passport'
import { EmployerForm } from '../employer'

export const pageSteps = [
  { title: 'Финансы', formName: 'finance', component: FinanceForm },
  { title: 'Контакты', formName: 'contacts', component: ContactsForm },
  { title: 'Паспорт', formName: 'passport', component: PassportForm },
  { title: 'Работодатель', formName: 'employer', component: EmployerForm },
]
