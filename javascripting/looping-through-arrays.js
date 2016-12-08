var pets = ['cat', 'dog', 'rat'];
var arrayLength = pets.length;
for(var i = 0; i < arrayLength; i++)
{
  pets[i] = pets[i] + 's';
}
console.log(pets);