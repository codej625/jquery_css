# click event를 활용하여 index값 찾기

## index값으로 활용하기
ex)
```html
<table>
    <thead>
        <tr>
            <th>test1</th>
            <th>test2</th>
            <th>test3</th>
        </tr>
    </thead>
    <tbody class="tbody">

    </tbody>
</table>
```

```javascript
// create table
    let table = '';
    table += '<tr><td class="click">' + 1 + '</td>';
    table += '<td class="click">'     + 2 + '</td>';
    table += '<td class="click">'     + 3 + '</td></tr>';
    $('.tbody').html(table);

    // click function
    $('.click').click(function () {
      // find a index
      const indexNo = $(this).index();
      console.log('indexNo => ', indexNo);
      // color reset
      $('.click').css('background-color', 'white');
      $('.click').eq(indexNo).css('background-color', 'red');
    });
```