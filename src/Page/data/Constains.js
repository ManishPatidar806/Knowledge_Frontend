export const LANGUAGE_VERSIONS = [
  { Name: "C", name: "c", version: "10.2.0", aliases: ["gcc"], runtime: "gcc" },
  {
    Name: "C++",
    name: "c++",
    version: "10.2.0",
    aliases: ["cpp", "g++"],
    runtime: "gcc",
  },
  { Name: "Java", name: "java", version: "15.0.2", aliases: [] },
  { Name: "Python 2", name: "python2", version: "2.7.18", aliases: [] },
  {
    Name: "JavaScript",
    name: "javascript",
    version: "1.32.3",
    aliases: ["deno-js"],
    runtime: "deno",
  },

  { Name: "Dart", name: "dart", version: "2.19.6", aliases: [] },

  { Name: "Kotlin", name: "kotlin", version: "1.8.20", aliases: ["kt"] },

  {
    Name: "Basic.NET",
    name: "basic.net",
    version: "5.0.201",
    aliases: [
      "basic",
      "visual-basic",
      "visual-basic.net",
      "vb",
      "vb.net",
      "vb-dotnet",
      "dotnet-vb",
      "basic-dotnet",
      "dotnet-basic",
    ],
    runtime: "dotnet",
  },
  {
    Name: "FSharp.NET",
    name: "fsharp.net",
    version: "5.0.201",
    aliases: [
      "fsharp",
      "fs",
      "f#",
      "fs.net",
      "f#.net",
      "fsharp-dotnet",
      "fs-dotnet",
      "f#-dotnet",
      "dotnet-fsharp",
      "dotnet-fs",
      "dotnet-fs",
    ],
    runtime: "dotnet",
  },
  {
    Name: "CSharp.NET",
    name: "csharp.net",
    version: "5.0.201",
    aliases: [
      "csharp",
      "c#",
      "cs",
      "c#.net",
      "cs.net",
      "c#-dotnet",
      "cs-dotnet",
      "csharp-dotnet",
      "dotnet-c#",
      "dotnet-cs",
      "dotnet-csharp",
    ],
    runtime: "dotnet",
  },

  { Name: "Go", name: "go", version: "1.16.2", aliases: ["go", "golang"] },
  {
    Name: "Golfscript",
    name: "golfscript",
    version: "1.0.0",
    aliases: ["golfscript"],
  },
  {
    Name: "Groovy",
    name: "groovy",
    version: "3.0.7",
    aliases: ["groovy", "gvy"],
  },

  {
    Name: "CSharp",
    name: "csharp",
    version: "6.12.0",
    aliases: ["mono", "mono-csharp", "mono-c#", "mono-cs", "c#", "cs"],
    runtime: "mono",
  },

  { Name: "Perl", name: "perl", version: "5.36.0", aliases: ["pl"] },
];

export const CODE_SNIPPETS = {
  dart: `
  void greet(String name) {
    print('Hello, ' + name + '!');
  }
  
  void main() {
    greet('Alex');
  }
    `,

  javascript: `
  function greet(name) {
    console.log('Hello, ' + name + '!');
  }
  
  greet('Alex');
    `,
  "basic.net": `
  Module Hello
    Sub Main()
      Console.WriteLine("Hello, World in Basic.NET")
    End Sub
  End Module
    `,
  "fsharp.net": `
  module Hello
  
  [<EntryPoint>]
  let main argv =
      printfn "Hello, World in F#"
      0
    `,
  "csharp.net": `
  using System;
  
  namespace HelloWorld
  {
    class Program
    {
      static void Main(string[] args)
      {
        Console.WriteLine("Hello, World in C#");
      }
    }
  }
    `,
  c: `
  #include <stdio.h>
  
  int main() {
      printf("Hello, World in C\\n");
      return 0;
  }
    `,
  "c++": `
  #include <iostream>
  using namespace std;
  
  int main() {
      cout << "Hello, World in C++" << endl;
      return 0;
  }
    `,
  go: `
  package main
  
  import "fmt"
  
  func greet(name string) {
      fmt.Println("Hello, " + name + "!")
  }
  
  func main() {
      greet("Alex")
  }
    `,
  golfscript: `
  "Hello, Golfscript!" print
    `,
  groovy: `
  def greet(name) {
      println "Hello, " + name + "!"
  }
  
  greet("Alex")
    `,
  java: `
  public class HelloWorld {
      public static void main(String[] args) {
          System.out.println("Hello, World in Java");
      }
  }
    `,
  kotlin: `
  fun greet(name: String) {
      println("Hello, " + name + "!")
  }
  
  fun main() {
      greet("Alex")
  }
    `,
  csharp: `
  using System;
  
  namespace HelloWorld
  {
    class Program
    {
      static void Main(string[] args)
      {
        Console.WriteLine("Hello, World in C#");
      }
    }
  }
    `,

  perl: `
  print "Hello, World in Perl";
    `,

  python2: `
name = 'Alex'
print "Hello, " + name + "!"
    `,
};
