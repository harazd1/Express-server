import fs from 'fs';

class appService {
    async addEmail(email) {
        // Запис рядка CSV у файл
        const data = `${email.email}` + '\n';
        fs.appendFile('addresses.csv', data, (err) => {
        if (err) {
            console.error('Помилка запису до файлу:', err);
            return;
        }
        console.log('Файл успішно створено та записано.');
        });
        return email;
    }
}


export default new appService();