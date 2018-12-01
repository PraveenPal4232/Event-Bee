for (i = 0; i <= 31; i=i+7) {

    $('#calender').append(`
		<tr>
			<td>${i+1<= 31: i+1 ? ''}<td>
			<td>${i+2<= 31: i+2 ? ''}<td>
			<td>${i+3<= 31: i+3 ? ''}<td>
			<td>${i+4}<td>
			<td>${i+5}<td>
			<td>${i+6}<td>
			<td>${i+7}<td>
		</tr>
	`);
}