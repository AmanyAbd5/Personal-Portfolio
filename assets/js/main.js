function find(nums,target)
{
    var number=new Map;
    for(var i=0; i<nums.length ;i++)
    {
        var num=target-nums[i];
        if(number.has(num))
        {
            return [number.get(num),i];
        }
        number.set(nums[i],i)
    }
    return[5];
}
var nums =[2,11,15,7];
var target= 9;
var result= new find(nums,target);
console.log(result); 