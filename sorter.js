
var namMember = new Array(
    "option 1",
    "option 2",
    "option 3",
    "option 4",
    "option 5"
);

//*********************************************************
var lstMember = new Array();
var parent = new Array();
var equal = new Array();
var rec = new Array();
var cmp1, cmp2;
var head1, head2;
var nrec;

var numQuestion;
var totalSize;
var finishSize;
var finishFlag;
//The initialization of the variable+++++++++++++++++++++++++++++++++++++++++++++

function initList() {
    var n = 0;
    var mid;
    var i;

    //The sequence that you should sort

    lstMember[n] = new Array();

    for (i = 0; i < namMember.length; i++) {
        lstMember[n][i] = i;
    }

    parent[n] = -1;
    totalSize = 0;
    n++;

    for (i = 0; i < lstMember.length; i++) {
        //And element divides it in two/more than two
        //Increase divided sequence of last in first member
        if (lstMember[i].length >= 2) {

            mid = Math.ceil(lstMember[i].length / 2);

            lstMember[n] = new Array();

            lstMember[n] = lstMember[i].slice(0, mid);

            totalSize += lstMember[n].length;

            parent[n] = i;

            n++;

            lstMember[n] = new Array();

            lstMember[n] = lstMember[i].slice(mid, lstMember[i].length);

            totalSize += lstMember[n].length;

            parent[n] = i;

            n++;

        }

    }



    //Preserve this sequence

    for (i = 0; i < namMember.length; i++) {

        rec[i] = 0;

    }

    nrec = 0;



    //List that keeps your results

    //Value of link initial

    // Value of link initial

    for (i = 0; i <= namMember.length; i++) {

        equal[i] = -1;

    }



    cmp1 = lstMember.length - 2;

    cmp2 = lstMember.length - 1;

    head1 = 0;

    head2 = 0;

    numQuestion = 1;

    finishSize = 0;

    finishFlag = 0;

}



//&#12522;&#12473;&#12488;&#12398;&#12477;&#12540;&#12488;+++++++++++++++++++++++++++++++++++++++++++

//flag&#65306;Don't know characters

// -1&#65306;Chose the left

// 0&#65306;Tie

// 1&#65306;Chose the right

function sortList(flag) {

    var i;

    var str;



    //rec preservation

    if (flag < 0) {

        rec[nrec] = lstMember[cmp1][head1];

        head1++;

        nrec++;

        finishSize++;

        while (equal[rec[nrec - 1]] != -1) {

            rec[nrec] = lstMember[cmp1][head1];

            head1++;

            nrec++;

            finishSize++;

        }

    }

    else if (flag > 0) {

        rec[nrec] = lstMember[cmp2][head2];

        head2++;

        nrec++;

        finishSize++;

        while (equal[rec[nrec - 1]] != -1) {

            rec[nrec] = lstMember[cmp2][head2];

            head2++;

            nrec++;

            finishSize++;

        }

    }

    else {

        rec[nrec] = lstMember[cmp1][head1];

        head1++;

        nrec++;

        finishSize++;

        while (equal[rec[nrec - 1]] != -1) {

            rec[nrec] = lstMember[cmp1][head1];

            head1++;

            nrec++;

            finishSize++;

        }

        equal[rec[nrec - 1]] = lstMember[cmp2][head2];

        rec[nrec] = lstMember[cmp2][head2];

        head2++;

        nrec++;

        finishSize++;

        while (equal[rec[nrec - 1]] != -1) {

            rec[nrec] = lstMember[cmp2][head2];

            head2++;

            nrec++;

            finishSize++;

        }

    }



    //Processing after finishing with one list

    if (head1 < lstMember[cmp1].length && head2 == lstMember[cmp2].length) {

        //List the remainder of cmp2 copies, list cmp1 copies when finished scanning

        while (head1 < lstMember[cmp1].length) {

            rec[nrec] = lstMember[cmp1][head1];

            head1++;

            nrec++;

            finishSize++;

        }

    }

    else if (head1 == lstMember[cmp1].length && head2 < lstMember[cmp2].length) {

        //List the remainder of cmp1 copies, list cmp2 copies when finished scanning

        while (head2 < lstMember[cmp2].length) {

            rec[nrec] = lstMember[cmp2][head2];

            head2++;

            nrec++;

            finishSize++;

        }
    }
    //When it arrives at the end of both lists

    //Update a pro list

    if (head1 == lstMember[cmp1].length && head2 == lstMember[cmp2].length) {

        for (i = 0; i < lstMember[cmp1].length + lstMember[cmp2].length; i++) {

            lstMember[parent[cmp1]][i] = rec[i];

        }

        lstMember.pop();

        lstMember.pop();

        cmp1 = cmp1 - 2;

        cmp2 = cmp2 - 2;

        head1 = 0;

        head2 = 0;

        //Initialize the rec before performing the new comparison
        if (head1 == 0 && head2 == 0) {
            for (i = 0; i < namMember.length; i++) {
                rec[i] = 0;
            }
            nrec = 0;
        }
    }

    if (cmp1 < 0) {
        str = "battle #" + (numQuestion - 1) + "<br>" + Math.floor(finishSize * 100 / totalSize) + "% sorted.";
        document.getElementById("battleNumber").innerHTML = str;

        showResult();
        finishFlag = 1;
    }
    else {
        showImage();
    }
}

//The results+++++++++++++++++++++++++++++++++++++++++++++++

//&#38918;&#20301;=Rank/Grade/Position/Standing/Status

//&#21517;&#21069;=Identification term

function showResult() {
    var ranking = 1;
    var sameRank = 1;
    var str = "";
    var i;

    str += "<table style=\"width:200px; font-size:18px; line-height:120%; margin-left:auto; margin-right:auto; border:1px solid #000; border-collapse:collapse\" align=\"center\">";
    str += "<tr><td style=\"color:#ffffff; background-color:#e097d9; text-align:center;\">rank<\/td><td style=\"color:#ffffff; background-color:#e097d9; text-align:center;\">options<\/td><\/tr>";

    for (i = 0; i < namMember.length; i++) {

        str += "<tr><td style=\"border:1px solid #000; text-align:center; padding-right:5px;\">" + ranking + "<\/td><td style=\"border:1px solid #000; padding-left:5px;\">" + namMember[lstMember[0][i]] + "<\/td><\/tr>";

        if (i < namMember.length - 1) {

            if (equal[lstMember[0][i]] == lstMember[0][i + 1]) {

                sameRank++;

            } else {

                ranking += sameRank;

                sameRank = 1;

            }

        }

    }

    str += "<\/table>";
    document.getElementById("resultField").innerHTML = str;
}



//Indicates two elements to compare+++++++++++++++++++++++++++++++++++

function showImage() {
    var str0 = "battle #" + numQuestion + "<br>" + Math.floor(finishSize * 100 / totalSize) + "% sorted.";
    var str1 = "" + toNameFace(lstMember[cmp1][head1]);
    var str2 = "" + toNameFace(lstMember[cmp2][head2]);

    document.getElementById("battleNumber").innerHTML = str0;
    document.getElementById("leftField").innerHTML = str1;
    document.getElementById("rightField").innerHTML = str2;

    numQuestion++;
}



//Convert numeric value into a name (emoticon)+++++++++++++++++++++++++++++++

function toNameFace(n) {

    var str = namMember[n];
    /*
     
    str += '<br />';
     
    switch(n) {
     
    //case -1 Because it is a sample, delete it
     
    case -1: str+=""; break;
     
    }*/

    return str;
}

function begin(){
    document.getElementById('inputTable').style.display = "none";
    document.getElementById('mainTable').style.display = "";

    namMember = document.getElementById('textarea').value.trim().split('\n');
    initList();
    showImage();
}

document.getElementById('mainTable').style.display = "none";
