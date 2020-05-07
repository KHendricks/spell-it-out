import os
if os.path.exists("output.txt"):
    os.remove("output.txt")
tmp_file = open("tmp.txt", "w")

with open("hard_words.txt") as fileobj:
    for line in fileobj:
        for ch in line:
            if ch == "" or ch == " ":
                print("", file=tmp_file)
            else:
                print(ch, file=tmp_file, end="")
tmp_file.close()

out = open("output.txt", "w")
with open("tmp.txt") as tmpfile:
    for line in tmpfile:
        if len(line) > 1:
            print(line, file=out, end="")
os.remove("tmp.txt")
out.close()
