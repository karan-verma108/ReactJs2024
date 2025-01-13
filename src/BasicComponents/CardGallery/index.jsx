import Card from './Card';

export default function CardGallery() {
  return (
    <div>
      <p>This is my card gallery</p>
      <h1>Let's look at some cards below</h1>
      <Card
        imgSrc='https://images.unsplash.com/photo-1507146426996-ef05306b995a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHVwcHl8ZW58MHx8MHx8fDA%3D'
        animalName='Cute Dog'
      />
      <Card imgSrc='https://cdn-prd.content.metamorphosis.com/wp-content/uploads/sites/6/2022/12/shutterstock_781327003-1.jpg' />
    </div>
  );
}
