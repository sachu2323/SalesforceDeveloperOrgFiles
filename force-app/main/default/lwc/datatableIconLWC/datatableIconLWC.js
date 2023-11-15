import { LightningElement} from 'lwc';
const columns = [
                {
                    label: 'Name', fieldName: 'Name', 
                },
                {
                    label: 'Show Static Icon',
                    fieldName: '',
                    cellAttributes: { iconName: 'standard:account' }
                },
                {
                    label: 'Show Dynamic Icon',
                    fieldName: '',
                    cellAttributes: { iconName: { fieldName: 'dynamicIcon' } }
                }
            ];
export default class DatatableIconLWC extends LightningElement {
    columns = columns;
    data = [
            {
                Id: 1, Name: 'Ankit', dynamicIcon: 'action:close'
            },
            {
                Id: 2, Name: 'Anil', dynamicIcon: 'action:approval'
            },
            {
                Id: 3, Name: 'Rijwan', dynamicIcon: 'action:approval'
            },
            {
                Id: 4, Name: 'Himanshu', dynamicIcon: 'action:close'
            }
        ]
}