# Quick Sort



# first heading 
![maze](./maze.jpg)

Voluptate sint fugiat tempor fugiat. Deserunt excepteur do amet nisi consequat culpa consectetur sint velit do nisi magna cupidatat. Ut nisi anim cillum exercitation aute laboris ullamco Lorem qui do minim eiusmod fugiat occaecat. Quis ut duis sunt pariatur laboris.

Labore sunt excepteur in minim ut ex. Aliquip dolore velit enim ex eiusmod minim esse dolor elit voluptate veniam adipisicing laborum. Exercitation et non nostrud cillum culpa. Ullamco pariatur voluptate veniam aliqua tempor deserunt dolore incididunt commodo. Cillum eiusmod ea pariatur sunt nostrud fugiat proident officia non est incididunt. Est sunt dolore ullamco ipsum amet Lorem commodo magna non consectetur.

## introduction 

Tempor proident ipsum sint id aliquip. Tempor in ex nulla ea velit in est dolore. Sint aute proident occaecat mollit aute sit irure enim proident sunt occaecat consequat. Lorem duis proident pariatur pariatur minim cillum anim dolore. Duis eu quis ipsum do laboris sunt esse minim ullamco veniam amet qui non. Dolor anim laborum proident sint.

Dolore aute Lorem id occaecat ea do exercitation adipisicing. Tempor irure pariatur eiusmod reprehenderit id incididunt cupidatat enim labore nisi. Laborum et dolor qui reprehenderit. Incididunt eu mollit magna anim dolor est quis proident do.

## diagrams 

### Sequence Diagram 

{{< mermaid >}}
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail...
    John-->Alice: Great!
    John->Bob: How about you?
    Bob-->John: Jolly good!
{{< /mermaid >}}


### Git Diagram 


{{< mermaid >}}
    gitGraph
       commit
       commit
       branch develop
       commit
       commit
       commit
       checkout main
       commit
       commit
{{< /mermaid >}}


### ER Diagram 

{{< mermaid >}}
    erDiagram
        CUSTOMER ||--o{ ORDER : places
        ORDER ||--|{ LINE-ITEM : contains
        CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
{{< /mermaid >}}

## flowchart diagram 

{{< mermaid >}}
    flowchart LR
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
{{< /mermaid >}}


## code 

### python 

```python
def partition(array, begin, end):
    pivot = begin
    for i in range(begin+1, end+1):
        if array[i] <= array[begin]:
            pivot += 1
            array[i], array[pivot] = array[pivot], array[i]
    array[pivot], array[begin] = array[begin], array[pivot]
    return pivot



def quicksort(array, begin=0, end=None):
    if end is None:
        end = len(array) - 1
    def _quicksort(array, begin, end):
        if begin >= end:
            return
        pivot = partition(array, begin, end)
        _quicksort(array, begin, pivot-1)
        _quicksort(array, pivot+1, end)
    return _quicksort(array, begin, end)
```
