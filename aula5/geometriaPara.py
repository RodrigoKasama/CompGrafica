import math
import array

def mapP5(valor, a, b, c, d):
	return (valor-a)/(b-a)*(d-c)+c

def parabola(raio, n=50, m=50):
	vertex = array.array('f')
	for i in range(m):
		x = mapP5(i,0,m,0,raio)
		for j in range(n):
			phi = j*2*math.pi/n
			Qx = x *math.cos(phi)
			Qy = x ** 2
			Qz = x * math.sin(phi)
			vertex.append(Qx)
			vertex.append(Qy)
			vertex.append(Qz)
	return vertex
