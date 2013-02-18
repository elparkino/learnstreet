// This function takes a string as input, separates up the values found between the commas and returns an array of those values.
function separateCommaValues(text)
    {
        var addrCount = 1;
        var addy = [""];
        var len = text.length;
        
        if(len==0){
            return[""];
        }
        
        
        for(var i=0;i<len;i++){
            var ch=text[i];
            if(ch == ","){
                //start a new value in add array
                if(addy[addrCount-1].length>0){
                addrCount += 1;
                addy.push("");
                }
            }else{
                //keep on adding to the value in add array
                addy[(addrCount-1)]+=ch;
            }
        }
        return addy;
    }

// This function extracts local and domain portions of an email address
function extractLocalDomain(str)
    {
        var len = str.length;
        var l = "";
        var d = "";
    if ( len >= 5 )
		{
		// We skip the spaces
		var pos = 0;
		while ( str[pos]==" " )
			{
			pos++;
			}
		// Now we expect the local part
		while ( str[pos]!="@" && pos < len )
			{
			l += str[pos];
			pos++;
			}
		// Now @
		if (str[pos]=="@" && pos < len)
			{
			pos++;
			}
		// Now we expect the domain part
		while ( str[pos]!=" " && pos < len )
			{
			d += str[pos];
			pos++;
			}
		// Now trailing spaces if any, we don't care
		}
	return [l,d];
    }

// This function checks if the local portion of an email is valid
function isValidLocal(str)
	{
        var len = str.length;
        
        if(len > 0){
            
            if(str[0] !='.' && str[0] != '_'){
            
                var ctr = 0;
                while (ctr<len && ((str[ctr]>='A' && str[ctr]<='Z') || (str[ctr]>= 'a' && str[ctr]<='z') || (str[ctr]>='0' && str[ctr]<='9') || str[ctr]== '.' || str[ctr]=='_')){
                    ctr++;
                }
                if(ctr==len){
                    return true;
                }
            }
        }
        return false;
	}