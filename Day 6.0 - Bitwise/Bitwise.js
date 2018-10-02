function getMaxLessThanK(n, k) {
    
    let maxValue = 0;
    let currentValue = -1;
    
    for (let i = 1; i < n; i++) {
        for (let j = i + 1; j <= n; j++) {
            currentValue = i & j;
            
            if (currentValue < k && currentValue > maxValue) {
                maxValue = currentValue;
            }
        }
    }
    return maxValue;
}