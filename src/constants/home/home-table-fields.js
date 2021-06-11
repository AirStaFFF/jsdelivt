export const FIELDS = [
    {
        key: 'package',
        label: 'Package Name',
        formatter: value => {
            return value.name
        }
    },
    {
        key: 'version',
        label: 'Version',
        formatter: (value, key, item) => {
            return item.package.version
        }
    },
    'actions'
]
