const charts = document.querySelectorAll(".chart");

charts.forEach(function (chart) {
  var ctx = chart.getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});

$(document).ready(function () {
  $(".data-table").each(function (_, table) {
    $(table).DataTable();
  });
});


 <script type="7283a107e0446ecb8c7b27ce-text/javascript">

jQuery(document).ready(function($) {
   $(".codehap_swL").each(function() {
        $(this).find('span').click(function(){
             var oldval = $("#codehap_input_old").val();
          var contents = $(this).text();
          
          var str = (oldval + contents.trim());
          var str2 = str.replace(/\n|\r/g, "");


          $("#codehap_input_old").val(str2);
        });        
    });
});



    
 var copyTextareaBtn = document.querySelector('.codehapTheCopy');
if(copyTextareaBtn){
copyTextareaBtn.addEventListener('click', function(event) {
  var copyTextarea = document.querySelector('.codehap_input_the_result');
  copyTextarea.focus();
  copyTextarea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    alert('Copying ' + msg);
  } catch (err) {
    alert('Oops, unable to copy');
  }
});
} 
    
    
</script>
<script type="7283a107e0446ecb8c7b27ce-text/javascript">
window.codehap_changePagination = function(el, nid, page_number,total) {
        $(el).attr('onclick', false);
        $('#codehap_pagination_data').css('opacity', 0.4);
        return $.ajax('/ajax.php', {
            method: 'POST',
            data: {
                page_number: page_number,
                nid: nid,
                total: total,
                type: 'pagination',
                fp_val: window.pfpval
            },
            success: function(data) {
                $('#codehap_pagination_data').html(data).css('opacity', 1);
                return document.getElementById('codehap_pagination_scroll').scrollIntoView({behavior: "smooth"});
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $('#codehap_pagination_data').css('opacity', 1);
                return false;
            }
        });
    };
    
    
    
    
    

function showDiv() {
  var x = document.getElementById("CodeHap_Comment_section");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("p1").innerHTML = "Close";
  } else {
    x.style.display = "none";
    document.getElementById("p1").innerHTML = "Add New Comment";
  }
}


$(function() {
	$("#codehap_comment_submit").bind("click", function(e) {
		a = $("#codehap_comment_submit").val();
		e.preventDefault(), $.ajax({
			type: "POST",
			url: "/ajax.php",
			data: $("#codehap_comment_form").serialize(),
			beforeSend: function() {
				document.getElementById('codehap_comment_submit').innerHTML = 'In progress...';
			},
			success: function(e) {
				$(".codehap_comment_data").html(e)
			},
			error: function(e) {
				$(".codehap_comment_data").html("Something went wrong! Please try again later!")
			},
			complete: function() {
				document.getElementById('codehap_comment_submit').innerHTML = a;
			}
		})
	})
});




$(function() {
	window.voteNameReputation = function(b, c, t, a) {
		$(b).attr("onclick", false);
		$("#name_votes_" + a).css("opacity", 0.4);
		return $.ajax("/ajax.php", {
			method: "POST",
			data: {
				vote: c,
				data: a,
				type: t,
				fp_val: window.pfpval
			},
			success: function(d) {
				$("#name_votes_" + a).html(d);
				return $("#name_votes_" + a).css("opacity", 1)
			},
			error: function(d, f, e) {
				$("#name_votes_" + a).css("opacity", 1);
				return $(b).attr("onclick", onc)
			}
		})
	};
});

$(function() {
	window.vNR = function(b, c, t, a ,e) {
		$(b).attr("onclick", false);
		$("#vote_" + a).css("opacity", 0.4);
		return $.ajax("/ajax.php", {
			method: "POST",
			data: {
				vote: c,
				data: a,
				type: t,
				fp_val: window.pfpval
			},
			success: function(d) {
                document.getElementById(e).innerHTML= d;

				//$("#vote_" + a).html(d);
				//return $("#vote_" + a).css("opacity", 1)
			},
			error: function(d, f, e) {
				$("#vote_" + a).css("opacity", 1);
				return $(b).attr("onclick", onc)
			}
		})
	};
});

$(function() {
	window.yesNo = function(b, c, t, a) {
		$(b).attr("onclick", false);
		$("#yesno_" + a).css("opacity", 0.4);
		return $.ajax("/ajax.php", {
			method: "POST",
			data: {
				vote: c,
				data: a,
				type: t,
				fp_val: window.pfpval
			},
			success: function(d) {
				$("#yesno_" + a).html(d);
				return $("#yesno_" + a).css("opacity", 1)
			},
			error: function(d, f, e) {
				$("#yesno_" + a).css("opacity", 1);
				return $(b).attr("onclick", onc)
			}
		})
	};
});

function copyToClipboard(element) {
	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val($(element).text()).select();
	document.execCommand("copy");
	$temp.remove();
}


$(function() {
	let myBtns = document.querySelectorAll('.codehap_item');
	myBtns.forEach(function(btn) {
		btn.addEventListener('click', () => {
			myBtns.forEach(b => b.classList.remove('codehap_active'));
			btn.classList.add('codehap_active');
			var last = btn.innerHTML;
			btn.innerHTML = 'Copied...';
			setTimeout(function() {
				btn.innerHTML = last;
				clicked = false;
			}.bind(btn), 1000);
		});
	});
});

(function() {
	window.pickWebsiteName = function(c, b, a) {
		var d;
		d = $(c).attr("onclick");
		$(c).attr("onclick", false).addClass("blink_me");
		$("#web_results_" + a).html("");
		return $.ajax("/ajax.php", {
			method: "POST",
			data: {
				type: a,
				selected_name: b
			},
			success: function(e) {
				$("#web_results_" + a).html(e);
				return $(c).attr("onclick", d).removeClass("blink_me").removeClass("text-success").addClass("text-info")
			},
			error: function(e, g, f) {
				return $(c).attr("onclick", d).removeClass("blink_me")
			}
		})
	}
}).call(this);

$(function() {
	$("#codehap_new_submit").bind("click", function(e) {
		a = $("#codehap_submit").val();
		e.preventDefault(), $.ajax({
			type: "POST",
			url: "/ajax.php",
			data: $("#codehap_new_form").serialize(),
			beforeSend: function() {
				document.getElementById('codehap_new_submit').innerHTML = 'In progress...';
			},
			success: function(e) {
				$(".codehap_new_data").html(e)
			},
			error: function(e) {
				$(".codehap_new_data").html("Something went wrong! Please try again later!")
			},
			complete: function() {
				document.getElementById('codehap_submit').innerHTML = a;
			}
		})
	})
});

$(function() {
	$("#codehap_submit").bind("click", function(e) {
		a = $("#codehap_submit").val();
		e.preventDefault(), $.ajax({
			type: "POST",
			url: "/ajax.php",
			data: $("#codehap_form").serialize(),
			beforeSend: function() {
				document.getElementById('codehap_submit').innerHTML = 'In progress...';
			},
			success: function(e) {
				$(".codehap_data").html(e)
			},
			error: function(e) {
				$(".codehap_data").html("Something went wrong! Please try again later!")
			},
			complete: function() {
				document.getElementById('codehap_submit').innerHTML = a;
			}
		})
	})
});

$(document).ready(function() {
	$('.search-box input[type="text"]').on("keyup input", function() {
		/* Get input value on change */
		var inputVal = $(this).val();
		var resultDropdown = $(this).siblings(".result");
		if (inputVal.length) {
			$.get("/backend-search.php", {
				term: inputVal
			}).done(function(data) {
				// Display the returned data in browser
				resultDropdown.html(data);
			});
		} else {
			resultDropdown.empty();
		}
	});
	// Set search input value on click of result item
	$(document).on("click", ".result p", function() {
		$(this).parents(".search-box").find('input[type="text"]').val($(this).text());
		$(this).parent(".result").empty();
	});
});
</script>
