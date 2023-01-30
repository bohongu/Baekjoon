x,y,z = input().split()

A = int(x)
B = int(y)
C = int(z)

print((A+B)%C)
print(((A%C)+(B%C))%C)
print((A*B)%C)
print(((A%C)*(B%C))%C)