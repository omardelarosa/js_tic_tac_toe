var row_sums = 0
var col_sums = [0,0,0]
var node;

//  name_of_obj.name_of_key_in_object => value_associated_with_that_key
var board = [
			[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0]
			]
var player = 0;
var turn = {
	number : 0,
	current_player_color : function() {
		if(this.number % 2 === 0) {
			return 'red'
		} else {
			return 'blue'
		}
	},
	change_turn : function(){
		this.number+=1;
	}
}



function check_rows() {
	for (var r=0;r<board[0].length;r++) {
		var row_sum = board[r][0]+board[r][1]+board[r][2]
		if(row_sum === 3) {
			player = 1;
			return true
		} else if (row_sum === -3) {
			player = 2;
			return true
		} else {
			return false
		}
	}
}

function check_cols() {
	for (var c=0;c<board[0].length;c++) {
		var col_sum = board[0][c]+board[1][c]+board[2][c]
		if(col_sum === 3) {
			player = 1;
			return true
		} else if (col_sum === -3) {
			player = 2;
			return true
		} else {
			return false;
		}
	}
}

function check_diag() {
	for (var d=0;d<2;d++) {
		var diag_sum1 = board[0][0]+board[1][1]+board[2][2]
		var diag_sum2 = board[2][0]+board[1][1]+board[0][2]
			if(diag_sum1 === 3 || diag_sum2 == 3) {
				player = 1;
				return true
			} else if (diag_sum1 === -3 || diag_sum2 == -3) {
				player = 2;
				return true
			} else {
				return false;
			}
	}
}

function check_winner () {
		if (check_rows() || check_cols() || check_diag() ) {
			alert('Player '+player+' wins!');
		}
}

$(document).ready(function(){
	$('.box_cell').click(function(){
		//make an X in that box or change color
			// X is red
		$(this).css('background-color',turn.current_player_color());

		//update the board array at that coordinate
		var current_col = $(this).data('col')
		var current_row = $(this).data('row')

		if(turn.number % 2 === 0) {
			board[current_row][current_col] = 1
		} else {
			board[current_row][current_col] = -1
		}

		//change the turn
		turn.change_turn() //the same as saying change_turn in ruby later in the program

		// name_of_obj.name_of_key_in_object => value_associated_with_that_key
		
		//check if someone won
		check_winner();
	});

})