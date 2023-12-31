import Button from './Button/Button'


export default function FeedbackSection(){

 return(
  <section>
    <h3>
      Обратная связь
    </h3>

    <form>
      <label htmlFor="name">Ваше имя</label>
      <input type="text" className='control' id='name'/>
      <label htmlFor="reason">Причина обращения</label>
      <select  id="reason" className='control'>
        <option value="error">Ошибка</option>
        <option value="help">Нужна помощь</option>
        <option value="suggest">Предложения</option>
      </select>
      <Button>Отправить</Button>
    </form>
  </section>
 )

}