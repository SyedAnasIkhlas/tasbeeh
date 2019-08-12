function localStorageAddItem(item,value=null)
{
	localStorage.setItem(item,value);
}

function localStorageRemoveItem(item)
{
	localStorage.removeItem(item);
}

function localStorageGetItem(item)
{
	return localStorage.getItem(item);
}