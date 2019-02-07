function getf(file,callback){
	var htp=new XMLHttpRequest();
	htp.overrideMimeType("application/json");
	htp.open('GET',file,true);
	htp.onreadystatechange=function(){
		if(htp.readyState===4 && htp.status=="200"){
			callback(htp.responseText);
		}
	}
	htp.send(null);
}
getf("dynamic.json",function(text){
	let data=JSON.parse(text);
	console.log(data);
	profile(data.profile);
	carrier(data.carrier);
	education(data.education);
	languages(data.languages);
})

var left=document.querySelector(".leftdiv");
function profile(p){
	var pimg=document.createElement("img");
	pimg.src=p.img;
	left.appendChild(pimg);

	 var ph3=document.createElement("h3");
	 ph3.textContent=p.name;
	 left.appendChild(ph3);
	 var r=document.createElement("p");
	 r.textContent=p.roll;
	 left.appendChild(r);
	 var c=document.createElement("p");
	 c.textContent=p.inistute;
	 left.appendChild(c);
	 var t=document.createElement("p");
	 t.textContent=p.place;
	 left.appendChild(t);
}

var right=document.querySelector(".rightdiv");
function carrier(c){
	var hc=document.createElement("h1");
	hc.innerHTML="resume";
	right.appendChild(hc);
	var pinfo=document.createElement("p")
	pinfo.innerHTML=c.info;
	right.appendChild(pinfo);
}
var right=document.querySelector(".rightdiv");
function education(e){
	var etable=document.createElement("table");
	etable.border="1";
	var tr1="<tr><td>S.no</td><td>degree</td><td>inistute</td><td>year of passing</td><td>";
	var tr2="";	
 	for(i=0;i<e.length;i++){
 		tr2=tr2+"<tr><td>"+e[i].Sno+"</td><td>"+e[i].degree+"</td><td>"+e[i].inistute+"</td><td>"+e[i].yearofpassing+"</td></tr>";
 	}

    etable.innerHTML=tr1+tr2;
    right.appendChild(etable);

}
var right=document.querySelector(".rightdiv");
function languages(n){
	var etable=document.createElement("table");
	etable.border="2";
	var tr1="<tr><td>languages known</td><td>";
	var tr2="";
	for (i=0;i<n.length;i++){
		tr2=tr2+"<tr><td>"+n[i].lang+"</td></tr>";
	}

	etable.innerHTML=tr1+tr2;
	right.appendChild(etable);

}