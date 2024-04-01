from tkinter import *

root = Tk()
root.title("Calculator")
root.mainloop()
root.geometry("400x300")
root.resizable(False, False)
num = StringVar() # создадим переменную для отображения значений на табло калькулятора
num.set(0)        # установим значение переменной равное 0
label = Entry(text=num, justify=RIGHT)
label.pack()
Button(text=1).pack(side=LEFT)